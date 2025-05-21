const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://dk6032907:ty7PoPDiLw389n0X@cluster-mern.bwafrzq.mongodb.net/learnMongoDb?retryWrites=true&w=majority&appName=cluster-mern")
    .then(() => console.log("Database connected Succssfully"))
    .catch((err) => console.log(err))

    const userSchema = new mongoose.Schema({
        name : String,
        email : String,
        age : Number,
        isActive : Boolean,
        tags : [String],
        createdAt : {type : Date, default : Date.now()}
    })

    const User = mongoose.model("User", userSchema);

    async function runQueriesExample() {
        try {
            // create a new User
            /* const newUser = await User.create({
                name : "dhanuhskumar",
                email : "dhanuhskumar@gmail.com",
                age : 21,
                isActive : true,
                tags : ["Developer", "Student"]
            })
            */

         // Its is a efficent method
            /*
            const newUser = new User({
                name : "ashwin",
                email : "ashwin@gmail.com",
                age : 23,
                isActive : false,
                tags : ["designer", "tester"]
            })
             await newUser.save();
            */
            // console.log("Created a new User", newUser);

            // Get all users
        //    const allUsers = await User.find();
        //     console.log(allUsers);


        // gt particular fields
            // const selectedfileds = await User.find().select('name email');
            // const selectedfileds = await User.find().select('name email -_id'); //avoid id property
            // console.log(selectedfileds);

            // get limited users and skip some users
            // const limitedUsers  = await User.find().limit(5).skip(1);
            // console.log(limitedUsers);

            // sort the fields
            // const sortedFields = await User.find().sort({name : -1}); // -1 for desc and 1 for ascending
            // console.log(sortedFields);

             // count the documents
            // const countDocumets = await User.countDocuments({isActive : true});
            // console.log(countDocumets);


            //delete the documents
                // const deleteDocuments = await User.findByIdAndDelete("682ca2ed5947158a3632de2b")
                // console.log(deleteDocuments);

        // update the documents
        const update = await User.findByIdAndUpdate("682ca2d35224a818dd78fbe0", {
            $set : {age : 100},
        }, {new : true});
        console.log(update);

     } catch (error) {
            console.log("error", error);
        }
        finally{
            await mongoose.connection.close();
        }
    }


    runQueriesExample();
