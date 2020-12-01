enum Membership {
  Simple,
  Standart,
  Modern
}

const membership = Membership.Standart
const membershipReverse = Membership[2]
console.log(membershipReverse)

enum Social {
  VK = 'vkontakte',
  FB = 'facebook',
  OK = 'odnoklassniki',
}

console.log(Social.VK)
console.log(Social[1]) // undefined

