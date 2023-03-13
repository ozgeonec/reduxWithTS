import React from "react";
import {useState} from "react";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";


const RepositoriesList: React.FC = () => {

    const [term, setTerm] = useState('');
    const {searchRepos} = useActions();
    const {data, error, loading} = useTypedSelector((state) => state.repositories);

    //const state = useSelector((state:any) => state.repositories)


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
            {error && <h3>{error}</h3>}
            {loading && <h3>...loading</h3>}
            {!error && !loading && data && <h3>{data}</h3>}
        </div>
    );
}

export default RepositoriesList;