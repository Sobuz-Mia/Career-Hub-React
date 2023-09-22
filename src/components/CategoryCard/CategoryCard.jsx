const CategoryCard = ({card}) => {
    const {logo,category_name,availability} = card;
    console.log(card);
  return (
    <div>
      <div className="card bg-slate-100">
        <div className="p-6">
            <img className="py-5" src={logo} alt="" />
          <h2 className="card-title">{category_name}</h2>
          <p className="mb-10 mt-3">{availability}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
