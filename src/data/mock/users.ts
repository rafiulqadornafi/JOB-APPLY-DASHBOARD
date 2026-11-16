import type {User,UserRole} from "../../types";
export const demoUsers:Record<UserRole,User>={
candidate:{id:"candidate-1",name:"Alex Morgan",email:"alex@example.com",role:"candidate",title:"Product Designer",initials:"AM",location:"Dhaka, Bangladesh"},
employer:{id:"employer-1",name:"Olivia Bennett",email:"olivia@northstar.demo",role:"employer",title:"Talent Acquisition Lead",initials:"OB",company:"Northstar Labs"},
admin:{id:"admin-1",name:"Jordan Lee",email:"admin@hirenest.demo",role:"admin",title:"Platform Administrator",initials:"JL"}};
export const sampleUsers=Object.values(demoUsers);