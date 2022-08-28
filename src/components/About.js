import React,{useState} from 'react'

export default function About() {
    const [theme, setTheme] = useState({
        color: "black",
        background: "white"
    })
    const[themeName,setThemeName]=useState("Enable Dark theme")
    const toggleSwitch=()=>{
        if (theme.color==='black'){
            setTheme({
                color: "white",
                background: "black"
            },
            setThemeName("Enable Light theme"));
        }
        else{
            setTheme({
            color: "black",
            background: "white"
            },
            setThemeName("Enable Dark theme"));
        }
    }

    return (
        <div className='container' style={theme} >
            <div className="toggleSwitch">
                <button className='btn btn-primary my-3' onClick={toggleSwitch} >
                    {themeName}
                </button>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

        </div>
    )
}
