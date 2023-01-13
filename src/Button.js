import { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((prop, ref) => {
    const[toggle, setToggle] = useState(false)

    useImperativeHandle(ref, () => ({
        alterToggle() {
             setToggle(!toggle)
        }
    }))
    return ( 
        <>
        <button>button from child</button>
        {toggle && <span>Toggle</span>}
        </>
     );
})
 
export default Button;