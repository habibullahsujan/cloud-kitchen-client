import { async } from "@firebase/util";

//save user data in the database
export const saveUserData = async (userInfo) => {
  if (userInfo) {
    const url = " https://cloud-kitchen-server-puce.vercel.app/signupUser";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    const data = await res.json();
    return data;
  }
};

export const getUserInfo=async(email)=>{
    if(email){
        const url=` https://cloud-kitchen-server-puce.vercel.app/signupUser?email=${email}`;
        const res= await fetch(url);
        const data=await res.json();
        return data;
    }
}
//update user liked status
export const updateLikedStatus=async(email, productInfo)=>{
  if(email){
    const url=` https://cloud-kitchen-server-puce.vercel.app/signupUser?email=${email}`;
    const res= await fetch(url, {
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(productInfo)
    });
    const data=await res.json();
    return data;
}
}
