export const Categories = props => {
	const { category, handleFiltersAction } = props
	return (
		<button
			onClick={() => handleFiltersAction(category.categoryName)}
			className='category-wrapper uppercase'
			key={category.id}
			id={category._id}>
			<div className={`category ${category.categoryName}`}></div>
			<h3 className='fs-600 letter-spacing-2 text-white'>
				{category.categoryName}
			</h3>
		</button>
	)
}
