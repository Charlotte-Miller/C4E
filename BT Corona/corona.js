//B1
// let x = Number(prompt("Nhập số :"));
// let y = 1 ;
// if ( x < 0)
//      {
//          console.log("invalid input");
//      }
//  else
//      {
//          for(let i = 1 ; i <= x ; i++)
//              {
//                  y = y*i;
//              }
//          console.log(y);
//      }
//B2
// let x = prompt("Nhập tên của bạn :");
// let y = Number(prompt("Nhập tuổi của bạn"));
// if (y < 18)
//     {
//         let a = x +' '+ 'Chưa đủ tuổi vào trang web';
//         console.log(a);
//     }
//     else
//         {
//         let b = prompt("Bạn có muốn vào trang web này không ?");
    
//         if(b === 'yes')
//             {
//                 let c = x +' '+ 'Chúc bạn vui vẻ';
//                 console.log(c);
//             }
//         else
//             {
//             let d = x + ' '+'Đã thoát khỏi trang web';
//             console.log(d);
        
//             }
//         }
//B3
// let x = prompt("user name");
// let y = prompt("passwword");
// let username2 = "huyha";
// let password2 = "123456";
// if(x === username2 && y === password2)
//     {
//         console.log("Đăng nhập thành công");
//     }   
// else if(y === password2 )   
//     {
//         console.log("Tên đăng nhập sai");
//     }
// else if(x === username2)
//     {
//         console.log("Mật khẩu sai");
//     }
// else
//     {
//         console.log("Bạn đã nhập sai mời nhập lại");
//     }
//B4
// let x = prompt("Tên");
// let y = Number(prompt("Tháng"));
// switch(y)
//     {
//         case 1 :
//         case 2 :
//         case 3 :
//             {
//                 console.log(x +" "+ "Sinh vào mùa xuân");
//                 break;
//             }
//         case 4 :
//         case 5 :
//         case 6 :
//             {
//                 console.log(x+" "+"Sinh vào mùa hè");
//                 break;
//             }
//         case 7 :
//         case 8 :
//         case 9 :  
//             {
//                 console.log(x+" "+"Sinh vào mùa thu");
//                 break;
//             } 
//         case 10 :
//         case 11 :
//         case 12 :
//             {
//                 console.log(x+" "+"Sinh vào mùa thu");
//                 break;
//             }
//         default : 
//             {
//                 console.log("Tháng không hợp lệ");
//             }
   
//     } 
//B5
let loop = true
while(loop)
    {
        let a = Number(prompt("Nhập a"));
        let b = Number(prompt("Nhập b"));
        let c = Number(prompt("Nhập c"));
        let e = prompt("yes or no");
        let d = b*b - 4*a*c;
        

        if(d<0)
            {
                console.log("PTVN");
        
                if(e === "yes")
                    {
                        loop = true
                    }
                else
                    {
                        loop = false;
                    }
            }
        else if(d === 0)
            {
                let x = -b/(2*a);
                console.log(x);
       
                if(e === "yes")
                    {
                        loop = true
                    }
                else
                    {
                        loop = false;
                    }
            }
        else
            {
                let x1 = (- b+ Math.sqrt(d))/(a*2);
                let x2 = (- b - Math.sqrt(d))/(a*2);
                console.log(x1);
                console.log(x2); 
                if(e=== "yes")
                    {
                        loop = true
                    }
                else    
                    {
                        loop = false;
                    }
            }
    
    
}