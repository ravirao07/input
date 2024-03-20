import {useState} from "react"
function Input()
{
    const [data,setDate] = useState('');
    const [print,setPrint] = useState(false);
    function getData(e)
    {
        setDate(e.target.value)
    }
    return(
        <div>
            {
                print ? <h1>{data}</h1> : null
            }
                <input type="text" onChange={getData}/>
                <br/>
                <button onClick={()=>setPrint(true)}>Add Me</button>
        </div>
    )
}
export default Input