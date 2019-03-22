var input=document.getElementById("ip");
var btn=document.getElementById("play");
var l=document.createElement("label");
l.setAttribute("class","abc");
var result=document.getElementById("result");
var s="";
			input.addEventListener("keyup",function(event)
										{
											var code=event.keyCode;
											if(code==13)
											{
												if(input.value=="")
													alert("Please enter choice");
												else
													win();
											}
										});
								
									function win()
									{									
										var uc=input.value;
										console.log(uc);
										var cc = Math.random();
										if (cc < 0.34) 
										{
											cc = "rock";
										} 
										else if(cc <= 0.67) 
										{
											cc = "paper";
										} 
										else 
										{
											cc = "scissors";
										}	
										
										if(uc==cc)
											s="Computer chose "+uc+".\nIt's a tie!!! Let's play again!!!";
										else if(uc=="rock")
										{
											if(cc=="scissors")
												s="Computer chose "+cc+".\n You win!!!";
											else
												s="Computer chose paper.\n You lose...Try again!!!";
										}
										else if(uc=="paper")
										{
											if(cc=="rock")
												s="Computer chose "+cc+".\n You win!!!";
											else
												s="Computer chose scissors.\n You lose...Try again!!!";
										}
										else if(uc=="scissors")
										{
											if(cc=="rock")
												s="Computer chose rock.\n You lose...Try again!!!";
											else
												s="Computer chose paper.\n You win!!!";
										}
			
									
									
											l.innerHTML=s;
											result.appendChild(l);
								
									}
	btn.addEventListener("click",function(event)
								{
									input.value="";
									l.innerHTML="";
								});									
							