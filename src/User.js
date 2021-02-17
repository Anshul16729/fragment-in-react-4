import React,{forwardRef} from 'react';
// function User(props){
function User(props,ref){

     {/*  Send Data Child to Parent Component */}
   // const data={name:"Anshul",email:"anshul@gmail.com"}

    {/*   forwardRef Example */}

    return(
        <div>
         {/*  Send Data Child to Parent Component */}
            {/* <h2>User Name : </h2>
            <button onClick={() =>props.alert(data)}>Click me</button> */}

             {/*  forwardRef Example */}
             <input type="text" ref={ref}/>
        </div>
    )
}

// export default User;
export default forwardRef(User);