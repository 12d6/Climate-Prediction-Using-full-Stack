import React,{useState} from 'react';

const intial={
    uname:'',
    mail:'',
    check:'',
   
  
    
  }


const Contact = () => {
    const[form,setForm]=useState(intial)
  const handleinput=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setForm({...form,[name]:value})
  }
   const formsubmit=(e)=>{
     e.preventDefault();
     setForm(intial);
     
   }
   const Change=()=>{
     

}
   
    return (
        <div>
        <div className="co">
        
        <div className="feedback">
            <h2>Write to us .  .  .</h2>
            <div className='contactbox'>
            <h4>Contact Us</h4>
        <form onSubmit={formsubmit}>
        
        <br></br>
        <input type="text" name="uname" value={form.uname} onChange={handleinput}></input>
        <br></br>
        <label>Email</label>
        <br></br>
        <input type='email' name="mail" value={form.mail} onChange={handleinput}></input>
        <br></br>
        <br></br>
        <label>Feedback</label>
        <br></br>
        <input type="textarea"name="check" value={form.check} onChange={handleinput}></input>
         
        
        <br></br>
        <br></br>
        <button type="submit" onChange={Change}>Submit</button>
        <br></br>
        
        </form>

            </div>
            
            <br></br>
            <h2>Feedback/Enquiries</h2>
           
  
           
        </div>
        <br></br>
        <div>We Wish you a Happy Gardening💚💚🌲🌴
            </div>
        </div>
        
        <div >
        

        </div>
        
        </div>
        
    );
};

export default Contact;
