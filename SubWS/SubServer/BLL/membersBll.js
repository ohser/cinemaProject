const MembersWS = require("../Dal/MembersWS");

const getAllmembers = async () => {
  let { data: Members } = await MembersWS.getAllmembers();

  Members = Members.map((Member) => {
    return {
      id: Member.id,
      name: Member.username,
      Email: Member.email,
      City: Member.address.city,
    };
  });
  Members = Members.slice(0, 10);

  console.log(Members);
  return Members;
  

};

// getAllmembers()


module.exports = { getAllmembers };
