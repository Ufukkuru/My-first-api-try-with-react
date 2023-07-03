import { useState } from "react";

function SearchHeader({search}) {
    
    const [value, setValue] = useState('')

    const handleChange =(event) =>{
        setValue(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        search(value)
    }
    return (
        <>
            <div>
                <form className="container mx-auto mt-10 " onSubmit={handleFormSubmit}>
                    <label className="text-2xl">What do you want to search</label>
                    <br />
                    <input onChange={handleChange} value={value} type="text" className=" border-4 w-full border-b-zinc-800" placeholder="Please Enter Value..."/>
                </form>
            </div>
        </>
     );
}

export default SearchHeader;