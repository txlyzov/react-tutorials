import React from 'react';
import MyInput from './UI/Input/MyInput';
import MySelect from './UI/Select/MySelect';

function PostFilter({ filter, setFilter }) {
    return (
        <div>
            <MyInput
                placeholder="Поиск по заголовку"
                value={filter.query}
                type="search"
                onChange={(e) => setFilter({ ...filter, query: e.target.value })}
            />

            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue={"Сортировка"}
                options={[
                    { value: "title", name: "По названию" },
                    { value: "body", name: "По описанию" },
                ]}
            />
        </div>);
}

export default PostFilter; 