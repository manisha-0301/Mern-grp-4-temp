let customer = [
    {
        name:'Robert',
        email: 'robert@gmail.com',
        phone: '+91-123-456-7890',
        no_of_times_shopped: 2,
        purchase_history : [
            {
                date_of_purchase:'01/01/2022',
                item_purchase:[
                    {
                        product_name:'rice ',
                        product_price:50
                    },
                    {
                        product_name:'aata',
                        product_price:40
                    },
                ]
            },
            {
                date_of_purchase:'02/06/2022',
                item_purchase:[
                    {
                        product_name:'soap',
                        product_price:120
                    }
                ]
            }
        ]
    },
    {
        name:'Alpha',
        email: 'alpha@gmail.com',
        phone: '+91-1234567',
        no_of_times_shopped: 1,
        purchase_history : [
            {
                date_of_purchase:'03/07/2022',
                item_purchase:[
                    {
                        product_name:'besan',
                        product_price:30
                    },
                    
                ]
            }
        ]
    },
    {
        name:'beta',
        email: 'beta@gmail.com',
        phone: '+91-1234567',
        no_of_times_shopped: 3,
        purchase_history : [
            {
                date_of_purchase:'04/07/2022',
                item_purchase:[
                    {
                        product_name:'ghee',
                        product_price:300
                    },
                    {
                        product_name:'sattu',
                        product_price:40
                    },
                ]
            },
            {
                date_of_purchase:'07/06/2022',
                item_purchase:[
                    {
                        product_name:'sugar',
                        product_price:60
                    }
                ]
            },
            {
                date_of_purchase:'01/09/2022',
                item_purchase:[
                    {
                        product_name:'tea',
                        product_price:250
                    }
                ]
            } 
        ]  
    },
    {
        name:'Sam',
        email: 'sam@gmail.com',
        phone: '+91-123-456-7890',
        no_of_times_shopped: 4,
        purchase_history : [
            {
                date_of_purchase:'02/11/2022',
                item_purchase:[
                    {
                        product_name:'jam',
                        product_price:120
                    },
                    {
                        product_name:'butter',
                        product_price:200
                    },
                ]
            },
            {
                date_of_purchase:'05/06/2022',
                item_purchase:[
                    {
                        product_name:'detergent',
                        product_price:220
                    }
                ]
            },
            {
                date_of_purchase:'25/05/2022',
                item_purchase:[
                    {
                        product_name:'biscuit',
                        product_price:200
                    }
                ]
            },
            {
                date_of_purchase:'19/12/2022',
                item_purchase:[
                    {
                        product_name:'snacks',
                        product_price:55
                    }
                ]
            }
        ]    
    },

    {

        name:'Tom',
        email: 'tom@gmail.com',
        phone: '+91-9993442167',
        no_of_times_shopped: 6,
        purchase_history : [
            {
                date_of_purchase:'11/10/2022',
                item_purchase:[
                    {
                        product_name:'toothpaste',
                        product_price:229
                    },
                    {
                        product_name:'facewash',
                        product_price:300
                    },
                ]
            },
            {
                    date_of_purchase:'22/02/2022',
                    item_purchase:[
                        {
                            product_name:'corn flakes',
                            product_price:500
                        }
                    ]
                },
                {
                    date_of_purchase:'15/03/2022',
                    item_purchase:[
                        {
                            product_name:'milk',
                            product_price:200
                        }
                    ]
                },
                {
                    date_of_purchase:'18/04/2022',
                    item_purchase:[
                        {
                            product_name:'bread',
                            product_price:34
                        }
                    ]
                },
                {
                    date_of_purchase:'14/05/2022',
                    item_purchase:[
                        {
                            product_name:'shampoo',
                            product_price:139
                        }
                    ]
                },
                {
                    date_of_purchase:'31/08/2022',
                    item_purchase:[
                        {
                            product_name:'spices',
                            product_price:296
                        }
                    ]
                } 
            ]                 
            

    }
];
console.log(customer.length);

for(let i=0;i<5;i++)
{
    if(customer[i].no_of_times_shopped>5){
        console.log(`${customer[i].name} has shopped more than 5 times`);
        let  total_purchase = 0;
        for(let j=0;j<customer[i].no_of_times_shopped;j++){
            let sum=0
            for(let k=0;k<customer[i].purchase_history[j].item_purchase.length;k++){
            
                sum += customer[i].purchase_history[j].item_purchase[k].product_price;
            }
            total_purchase += sum;
        }
        console.log(`\nTotal purchase by ${customer[i].name} is ${total_purchase}`);
    }
}

for(let i=0;i<5;i++)
{
    let  total_purchase = 0;
    for(let j=0;j<customer[i].no_of_times_shopped;j++){
        let sum=0
        for(let k=0;k<customer[i].purchase_history[j].item_purchase.length;k++){
            
            sum += customer[i].purchase_history[j].item_purchase[k].product_price;
        }
        total_purchase += sum;
    }
    console.log(`\nTotal purchase by ${customer[i].name} is ${total_purchase}`);
}



