const express = require("express");
const router = express.Router();

router.post('/foodData', (req,res)=>{
    try {
        // console.log(global.food_items);
        
        res.send([global.food_items, global.foodCategory])
        // res.send({
        //     success: true,
        //     message: "Food data fetched successfully",
        //     data: {
        //       food_items: global.food_items,
        //       foodCategory: global.foodCategory
        //     }
        //   });
          
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
        
    }
})

module.exports = router;