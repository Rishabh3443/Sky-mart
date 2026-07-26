import React from 'react'
import { useNavigate } from 'react-router'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";  
import { login } from "../Features/Auth";
import { toast } from 'react-toastify';

const Login = () => {
       
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();
 
      const onSubmit = (data)=>{
          const users = JSON.parse(localStorage.getItem("users")) || [];

          const user = users.find(
            (u)=> u.email === data.email && u.password === data.password
          );

          if(user){
            dispatch(login(user));

            localStorage.setItem(
                "currentUser",
                JSON.stringify(user)
            );

            navigate("/");
          }else{

            toast.warn("invalid email or password");
            
          }
      };


  return (
   <div className="w-full min-h-screen flex bg-white ">
      
      
      <div className="hidden lg:block lg:w-1/2 relative">
        <img 
          src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D" 
          alt="Fashion Clothing" 
          className="w-full h-174 object-cove rounded-l  overflow-hidden"
        />
        
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-16">
        
       
        <div className="max-w-md w-full flex flex-col gap-8">
          
          
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-black uppercase tracking-wide text-black">
              Login Here
            </h1>
            <p className="text-gray-500 mt-2 font-medium">
              Join us to discover the latest trends and exclusive offers.
            </p>
          </div>

          
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            
            
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Email Address</label>
              <input 
              {...register("email",{
                required:"email is required",
              })}
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-4 border border-gray-300 rounded bg-gray-50 text-gray-900 outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
              />
              <p className='text-red-500 '>{errors.email?.message}</p>
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Password</label>
              <input 
              {...register("password",{
                required:"password is required",
              })}
                type="password" 
                placeholder="Create a password" 
                className="w-full p-4 border border-gray-300 rounded bg-gray-50 text-gray-900 outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
              />
              <p className='text-red-500'>{errors.password?.message}</p>
            </div>

            {/* Submit Button (White default, Black on hover) */}
            <button 
              type="Submit" 
              className="mt-4 rounded-xl w-full py-4 border border-black bg-white text-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
            >
              Login
            </button>
            
          </form>

          {/* Login Link */}
          <div className="text-center mt-2">
            <p className="text-gray-600 text-sm">
              you have not an account?{' '}
              <span onClick={()=>{navigate("/register")}} className=" cursor-pointer text-black font-bold hover:underline transition-all">
                Register Here
              </span>
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Login
