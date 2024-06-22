function List({ title }) {
    return (
        <div className='flex justify-end items-center mb-3 cursor-pointer side_menu-actions'>
            <span className='text-3xl pr-1'>⍟</span>
            <span className='capitalize'>{title}</span>
        </div>
    );
}

export default List;
