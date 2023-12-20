import CategoryButton from './components/CategoryButton'
import MinusAndPlusButton from './components/MinusAndPlusButton'
import SubcategoryButton from './components/SubcategoryButton'
import './styles.css'
import type { Props } from './types'

function Column({
	category,
	setOpenMenu,
	setCategoryExpanded,
	categoryExpanded
}: Props) {
	return (
		<div>
			<div className='flex flex-row items-center gap-[15px]'>
				<CategoryButton category={category} setOpenMenu={setOpenMenu} />
				<MinusAndPlusButton
					category={category}
					categoryExpanded={categoryExpanded}
					setCategoryExpanded={setCategoryExpanded}
				/>
			</div>
			<div className='flex flex-col pb-3'>
				{categoryExpanded === category.id &&
					category.subcategories.map(subcategory => (
						<SubcategoryButton
							category={category}
							key={subcategory.id}
							setOpenMenu={setOpenMenu}
							subcategory={subcategory}
						/>
					))}
			</div>
		</div>
	)
}

export default Column
