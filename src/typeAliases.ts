type StringOrNum = string | number;
type ObjectWithName = {name: string, uid:StringOrNum};

const logDetails = (uid: StringOrNum, item: String) => {
    console.log(uid, item);
};

const greetAgain = (user: ObjectWithName)=>{
    console.log(user.name, 'says hello!');
}