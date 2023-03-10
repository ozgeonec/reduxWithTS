import React from "react";
import {useState} from "react";
import {useActions} from "../hooks/useActions";
import {DefaultRootState, useSelector} from "react-redux";


const RepositoriesList: React.FC = () => {

    const [term, setTerm] = useState('');
    const {searchRepos} = useActions();
   // const {data, error, loading} = useSelector((state: DefaultRootState) => state.repositories);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchRepos(term);

    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={e => setTerm(e.target.value)}/>
                <button>Search</button>
            </form>
        </div>
    );
}

export default RepositoriesList;