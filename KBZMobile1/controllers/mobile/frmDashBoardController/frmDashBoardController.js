define({ 

 //Type your controller code here 
  
  navigation: function(){
 var self = this;
   alert("hi");
   
 var ntf = new kony.mvc.Navigation("frmManageMyBiller");
 ntf.navigate();
},


  
  preshow:function(){
   //alert("Funtion Start");
     alert("hi");
    this.view.segBillrQuickPay.setData([
      {
       "lblECP":"EPC - Mandalay", 
       "lblMMK":"accounts.png",
       "lblElectricBill":"Electricity Bill",
       "lblDate":"22-03-2021"
      },
      {
      "lblECP":"EPC - Naypyitaw",
      "lblMMK":"MMK 400.00",
      "lblElectricBill":"Electricity Bill",
      "lblDate":"22-03-2021"
      },
      {
      "lblECP":"Capital Life insurance",
      "lblMMK":"MMK 400.00",
      "lblElectricBill": "Electricity Bill",
      "lblDate":"22-03-2021"
      },
       {
      "lblECP":"EPC -  Bago",
      "lblMMK":"MMK 400.00",
      "lblElectricBill": "Electricity Bill",
      "lblDate":"22-03-2021"
       },
       {
      "lblECP":"EPC - Naypyitaw",
      "lblMMK":"MMK 400.00",
      "lblElectricBill": "Electricity Bill",
      "lblDate":"22-03-2021"
       },
       {
      "lblECP":"5BB Broadbrand",
      "lblMMk":"MMK 400.00",
      "lblElectricBill": "Electricity Bill",
      "lblDate":"22-03-2021"
       },
       {
      "lblECP":"5BB Broadbrand",
      "lblMMk":"MMK 400.00",
      "lblElectricBill": "Electricity Bill",
      "lblDate":"22-03-2021"
       },
          
   
     ]); 
        this.view.flxMngBillerContainer.onClick=this.navigation;
        
  }


});