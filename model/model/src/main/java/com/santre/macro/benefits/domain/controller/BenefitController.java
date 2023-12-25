package com.santre.macro.benefits.domain.controller;


import com.santre.macro.benefits.domain.entity.*;
import com.santre.macro.benefits.domain.models.responses.*;
import com.santre.macro.benefits.domain.service.*;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@RestController
@CrossOrigin
@RequestMapping("benefit")
public class BenefitController {

    @Autowired
    private BenefitService service;

    @Autowired
    private UserService userService;

    @Autowired
    private UserBenefitFavoriteService userBenefitFavoriteService;

    @Autowired
    private BenefitQualificationService benefitQualificationService;

    @Autowired
    private SubcategoryService subCategoryService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private JwtService jwtService;

    final private int pageSize = 8;

    private List<BenefitRest> listBenefitRest(UserEntity user, List<BenefitEntity> benefits){
        List<BenefitRest> benefitsRest = new ArrayList<>();
        for (BenefitEntity benefit: benefits) {

            Optional<UserBenefitFavoriteEntity> userBenefitFavoriteOptional = userBenefitFavoriteService
                    .getByUserAndBenefit(
                            user,
                            benefit
                    );

            var benefitRest = new BenefitRest();
            BeanUtils.copyProperties(benefit, benefitRest);
            benefitRest.setUserFavorite(userBenefitFavoriteOptional.isPresent());
            benefitRest.setSubcategoryName(benefit.getSubcategory().getName());
            benefitRest.setCategoryName(benefit.getSubcategory().getCategory().getName());
            benefitRest.setCategoryColor(benefit.getSubcategory().getCategory().getColor());
            benefitsRest.add(benefitRest);
        }
        return benefitsRest;
    }

    private ListBenefitsRest getListBenefitRestResponse(UserEntity user, int actualPage, Page<BenefitEntity> benefitsPage){
        List<BenefitRest> benefitsRest = listBenefitRest(user, benefitsPage.getContent());
        var response = new ListBenefitsRest();
        response.setBenefits(benefitsRest);
        if (actualPage < benefitsPage.getTotalPages() - 1) {
            response.setNextPage(actualPage+1);
        }else{
            response.setNextPage(-1);
        }
        return response;
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ListBenefitsRest list(@RequestHeader (name="Authorization") String token, @Param("page") int page){
        Optional<UserEntity> userOpt = getTokenUser(token);
        if (userOpt.isPresent()) {
            if (page < 0) {
                page = 0;
            }
            Page<BenefitEntity> benefitsPage = service.getAll(page, this.pageSize);
            return this.getListBenefitRestResponse(userOpt.get(), page, benefitsPage);
        }else{
            var response = new ListBenefitsRest();
            response.setBenefits(new ArrayList<>());
            response.setNextPage(-1);
            return response;
        }
    }

    @GetMapping("reportAverage")
    @PreAuthorize("hasAnyRole('ADMIN')")
    public ResponseEntity<?> listReport(@RequestHeader (name="Authorization") String token){
        Optional<UserEntity> userOpt = getTokenUser(token);
        if (userOpt.isPresent()) {
            var benefits = service.getAll();
            List<BenefitReportRest> benefitsReport = new ArrayList<>();
            for (var benefit: benefits){
                var benefitReportRest = getBenefitReportRest(benefit);
                benefitsReport.add(benefitReportRest);
            }
            return ResponseEntity
                    .status(HttpStatus.OK)
                    .body(benefitsReport);
        }else{
            return ResponseEntity
                    .status(HttpStatus.FORBIDDEN)
                    .body("Usuario inválido");
        }
    }

    private static BenefitReportRest getBenefitReportRest(BenefitEntity benefit) {
        var benefitReportRest = new BenefitReportRest();
        benefitReportRest.setId(benefit.getId());
        benefitReportRest.setTitle(benefit.getTitle());
        benefitReportRest.setDescription(benefit.getDescription());
        benefitReportRest.setCategoryName(benefit.getSubcategory().getCategory().getName());
        benefitReportRest.setSubcategoryName(benefit.getSubcategory().getName());
        benefitReportRest.setAverageQualification(benefit.getAverageQualification());
        benefitReportRest.setTotalQualifications(benefit.getQualifications().size());
        return benefitReportRest;
    }

    @GetMapping("search")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ListBenefitsRest listSearch(@RequestHeader (name="Authorization") String token, @Param("page") int page, @Param("keyword") String keyword){
        Optional<UserEntity> userOpt = getTokenUser(token);
        if (userOpt.isPresent()) {
            if (page < 0) {
                page = 0;
            }
            Page<BenefitEntity> benefitsPage = service.search(page, this.pageSize, keyword);
            return this.getListBenefitRestResponse(userOpt.get(), page, benefitsPage);
        }else{
            var response = new ListBenefitsRest();
            response.setBenefits(new ArrayList<>());
            response.setNextPage(-1);
            return response;
        }
    }

    @GetMapping("/home")
    @PreAuthorize("hasRole('USER')")
    public ListBenefitsRest listHome(@RequestHeader (name="Authorization") String token, @Param("page") int page){
        Optional<UserEntity> userOpt = getTokenUser(token);
        if (userOpt.isPresent()){
            Page<BenefitEntity> benefitsPage = service.getHomeBenefits(userOpt.get(), page, this.pageSize);
            return this.getListBenefitRestResponse(userOpt.get(), page, benefitsPage);
        }else{
            var response = new ListBenefitsRest();
            response.setBenefits(new ArrayList<>());
            response.setNextPage(-1);
            return response;
        }
    }

    @GetMapping("/favorites")
    @PreAuthorize("hasRole('USER')")
    public ListBenefitsRest listUserFav(@RequestHeader (name="Authorization") String token, @Param("page") int page){
        Optional<UserEntity> userOpt = getTokenUser(token);
        if (userOpt.isPresent()) {
            Page<BenefitEntity> benefitsPage = service.getUserFavoriteBenefits(userOpt.get().getId(), page, this.pageSize);
            return this.getListBenefitRestResponse(userOpt.get(), page, benefitsPage);
        }else{
            var response = new ListBenefitsRest();
            response.setBenefits(new ArrayList<>());
            response.setNextPage(-1);
            return response;
        }
    }

    @GetMapping("/subcategory/{idSubcategory}")
    @PreAuthorize("hasRole('USER')")
    public ListBenefitsRest listBySubcategory(@RequestHeader (name="Authorization") String token, @PathVariable Long idSubcategory, @Param("page") int page){
        Optional<UserEntity> userOpt = getTokenUser(token);
        if (userOpt.isPresent()) {
            Optional<SubcategoryEntity> subcategory = subCategoryService.getById(idSubcategory);
            if (subcategory.isPresent()) {
                Page<BenefitEntity> benefitsPage = service.getBySubcategory(
                                                            userOpt.get(),
                                                            subcategory.get(),
                                                            page,
                                                            this.pageSize
                                                    );
                return this.getListBenefitRestResponse(userOpt.get(), page, benefitsPage);
            }
        }
        var response = new ListBenefitsRest();
        response.setBenefits(new ArrayList<>());
        response.setNextPage(-1);
        return response;
    }

    @GetMapping("/category/{idCategory}")
    @PreAuthorize("hasRole('USER')")
    public ListBenefitsRest listByCategory(@RequestHeader (name="Authorization") String token, @PathVariable Long idCategory, @Param("page") int page){
        Optional<UserEntity> userOpt = getTokenUser(token);
        if (userOpt.isPresent()) {
            Optional<CategoryEntity> category = categoryService.getById(idCategory);
            if (category.isPresent()) {
                Page<BenefitEntity> benefitsPage = service.getByCategory(
                                                        userOpt.get(),
                                                        category.get(),
                                                        page,
                                                        this.pageSize
                                                    );
                return this.getListBenefitRestResponse(userOpt.get(), page, benefitsPage);
            }
        }
        var response = new ListBenefitsRest();
        response.setBenefits(new ArrayList<>());
        response.setNextPage(-1);
        return response;
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<?> details(@RequestHeader (name="Authorization") String token, @PathVariable Long id){
        Optional<UserEntity> userOpt = getTokenUser(token);
        if (userOpt.isPresent()) {
            var user = userOpt.get();
            Optional<BenefitEntity> benefitOptional = service.getById(id);
            if (benefitOptional.isPresent()) {
                Optional<UserBenefitFavoriteEntity> userBenefitFavoriteOptional = userBenefitFavoriteService
                        .getByUserAndBenefit(
                                user,
                                benefitOptional.get()
                        );

                Optional<BenefitQualificationEntity> benefitQualificationOptional = benefitQualificationService
                        .getByBenefitAndUser(
                                benefitOptional.get(),
                                user
                        );

                var benefitRest = new BenefitDetailRest();
                var benefit = benefitOptional.get();
                BeanUtils.copyProperties(benefit, benefitRest);
                benefitRest.setRegions(new ArrayList<>());
                for (var region: benefit.getRegions()) {
                    var regionRest = getRegionRest(region);
                    benefitRest.getRegions().add(regionRest);
                }
                benefitRest.setCategoryId(benefit.getSubcategory().getCategory().getId());
                benefitRest.setCategoryName(benefit.getSubcategory().getCategory().getName());
                benefitRest.setCategoryColor(benefit.getSubcategory().getCategory().getColor());
                benefitRest.setSubcategoryId(benefit.getSubcategory().getId());
                benefitRest.setSubcategoryName(benefit.getSubcategory().getName());
                benefitRest.setUserFavorite(userBenefitFavoriteOptional.isPresent());
                benefitQualificationOptional.ifPresent(
                        benefitQualification ->
                                benefitRest.setQualification(benefitQualification.stars)
                );
                return ResponseEntity.ok(benefitRest);
            }
        }
        return ResponseEntity.notFound().build();
    }

    private static RegionRest getRegionRest(BenefitRegionEntity region) {
        var regionRest = new RegionRest();
        regionRest.setId(region.getId());
        if (region.getCity() != null) {
            regionRest.setCity(region.getCity().getName());
            regionRest.setIDCity(region.getCity().getId());
        }
        if (region.getProvince() != null) {
            regionRest.setProvince(region.getProvince().getName());
            regionRest.setIDProvince(region.getProvince().getId());
        }
        return regionRest;
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> delete(@PathVariable Long id){
        Optional<BenefitEntity> BenefitOptional = service.getById(id);
        if (BenefitOptional.isPresent()){
            service.delete(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> create(
            @RequestHeader (name="Authorization") String token,
            @RequestPart("benefit") BenefitEntity benefit,
            @RequestPart("imageHeader") MultipartFile imageHeader,
            @RequestPart("imageHeaderMobile") MultipartFile imageHeaderMobile,
            @RequestPart("imageLists") MultipartFile imageList,
            @RequestPart("imageDetails1") MultipartFile imageDetails1,
            @RequestPart("imageDetails2") MultipartFile imageDetails2,
            BindingResult result) throws IOException {
        try {
            var optionalSubcategory = subCategoryService.getById(benefit.getSubcategory().getId());
            if (optionalSubcategory.isEmpty()) {
                throw new Exception("Bad request: Subcategory id " + benefit.getSubcategory().getId() + " doesn't exist.");
            }
            Optional<UserEntity> userOpt = getTokenUser(token);
            if (userOpt.isPresent()) {
                benefit.setUserCreation(userOpt.get().getFirstName() + " " + userOpt.get().getLastName());
            }
            benefit.setImageHeader(imageHeader.getBytes());
            benefit.setImageHeaderMobile(imageHeaderMobile.getBytes());
            benefit.setImageList(imageList.getBytes());
            benefit.setImageDetails1(imageDetails1.getBytes());
            benefit.setImageDetails2(imageDetails2.getBytes());

            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(service.save(benefit));
        } catch (Exception ex){
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(ex.getMessage());
        }
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> edit(
            @RequestPart("benefit") BenefitEntity benefit,
            @RequestPart("imageHeader") Optional<MultipartFile> imageHeader,
            @RequestPart("imageHeaderMobile") Optional<MultipartFile> imageHeaderMobile,
            @RequestPart("imageLists") Optional<MultipartFile> imageList,
            @RequestPart("imageDetails1") Optional<MultipartFile> imageDetails1,
            @RequestPart("imageDetails2") Optional<MultipartFile> imageDetails2,
            BindingResult result,
            @PathVariable Long id){
        if (result.hasErrors()){
            return validate(result);
        }
        Optional<BenefitEntity> benefitOptional = service.getById(id);
        if (benefitOptional.isPresent()) {
            BenefitEntity benefitDb = benefitOptional.get();
            benefitDb.setTitle(benefit.getTitle());
            benefitDb.setUserCreation(benefit.getUserCreation());
            benefitDb.setDescription(benefit.getDescription());
            benefitDb.setDateExpiration(benefit.getDateExpiration());
            benefitDb.setInHome(benefit.isInHome());
            benefitDb.setLink(benefit.getLink());
            benefitDb.setSubcategory(benefit.getSubcategory());
            benefitDb.setText(benefit.getText());
            benefitDb.setTitle(benefit.getTitle());

            imageList.ifPresent(multipartFile -> {
                try { benefitDb.setImageList(multipartFile.getBytes()); } catch (IOException e) { throw new RuntimeException(e); }
            });
            imageHeader.ifPresent(multipartFile -> {
                try { benefitDb.setImageHeader(multipartFile.getBytes()); } catch (IOException e) { throw new RuntimeException(e); }
            });
            imageHeaderMobile.ifPresent(multipartFile -> {
                try { benefitDb.setImageHeaderMobile(multipartFile.getBytes()); } catch (IOException e) { throw new RuntimeException(e); }
            });
            imageDetails1.ifPresent(multipartFile -> {
                try { benefitDb.setImageDetails1(multipartFile.getBytes()); } catch (IOException e) { throw new RuntimeException(e); }
            });
            imageDetails2.ifPresent(multipartFile -> {
                try { benefitDb.setImageDetails2(multipartFile.getBytes()); } catch (IOException e) { throw new RuntimeException(e); }
            });
            return ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(service.save(benefitDb));
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @PutMapping("/setAsFav/{id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> setAsFavorite(@RequestHeader (name="Authorization") String token, @PathVariable Long id) {
        Optional<UserEntity> userOpt = getTokenUser(token);
        if (userOpt.isPresent()) {
            var user = userOpt.get();
            var benefitOptional = service.getById(id);
            if (benefitOptional.isPresent()) {
                var benefit = benefitOptional.get();
                var favOpt = userBenefitFavoriteService.getByUserAndBenefit(user, benefit);
                if (favOpt.isEmpty()) {
                    var benefitFav = new UserBenefitFavoriteEntity();
                    benefitFav.setBenefit(benefit);
                    benefitFav.setUser(user);
                    userBenefitFavoriteService.create(benefitFav);
                }
                return ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body("OK");
            }
        }
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .build();
    }

    @PutMapping("/unsetFav/{id}")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> unsetFavorite(@RequestHeader (name="Authorization") String token, @PathVariable Long id) {
        Optional<UserEntity> userOpt = getTokenUser(token);
        if (userOpt.isPresent()) {
            var user = userOpt.get();
            var benefitOptional = service.getById(id);
            if (benefitOptional.isPresent()) {
                var benefit = benefitOptional.get();
                var favOpt = userBenefitFavoriteService.getByUserAndBenefit(user, benefit);
                favOpt.ifPresent(
                        userBenefitFavoriteEntity ->
                                userBenefitFavoriteService.delete(userBenefitFavoriteEntity.getId())
                );
                return ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body("OK");
            }
        }
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .build();
    }

    private static ResponseEntity<Map<String, String>> validate(BindingResult result) {
        Map<String,String> errors = new HashMap<>();
        result.getFieldErrors().forEach(err -> errors.put(err.getField(), err.getDefaultMessage()));
        return ResponseEntity.badRequest().body(errors);
    }

    private Optional<UserEntity> getTokenUser(String token){
        var token_without_bearer = token.substring(7);
        var email = jwtService.extractUserName(token_without_bearer);
        return userService.getByEmail(email);
    }

}
