const btn = document.querySelector('.freind__main')
const side = document.querySelector('.col-md-8')
const userHTML = document.querySelector('.friend-drawer')


const listProducts =
    [
        {
            "id": "1",
            "img": "url(https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg)",
            "name": "Robo Cop",
            "active": "Hey, you're arrested!"
        },
        {
            "id": "2",
            "img": "url(https://www.clarity-enhanced.net/wp-content/uploads/2020/06/optimus-prime.jpeg)",
            "name": "Optimus",
            "active": "Wanna grab a beer?"
        },
        {
            "id": "3",
            "img": "url(https://www.clarity-enhanced.net/wp-content/uploads/2020/06/real-terminator.png",
            "name": "Skynet",
            "active": "Seen that canned piece of s?"
        },
        {
            "id": "4",
            "img": "url(https://www.clarity-enhanced.net/wp-content/uploads/2020/06/termy.jpg)",
            "name": "Termy",
            "active": "Im studying spanish..."
        },
        {
            "id": "5",
            "img": "url(https://www.clarity-enhanced.net/wp-content/uploads/2020/06/rick.jpg)",
            "name": "Richard",
            "active": "I'm not sure..."
        },
        {
            "id": "6",
            "img": "url(https://www.clarity-enhanced.net/wp-content/uploads/2020/06/rachel.jpeg)",
            "name": "XXXXX",
            "active": "Hi, wanna see something?"
        }   
    ]

btn.addEventListener('click', () => {
    side.style.display = 'block';
})
console.log(listProducts);
const addDataToHTML = () => {
    listProducts.innerHTML = '';
    if(listProducts.length < 0) {
        listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('friend-drawer')
            newProduct.innerHTML = `  <div class="friend-drawer friend-drawer--onhover">
            <img class="profile-image" src="${product.image}"
              alt="">
            <div class="text">
              <h6>${product.name}</h6>
              <p class="text-muted">${product.active}</p>
            </div>
            <span class="time text-muted small">13:21</span>
          </div>`
          listProducts.appendChild(newProduct);
        })
    }
};

userHTML.addEventListener('click', (e) => {
    let PositionClick = e.target;
    if(PositionClick.classList.contains('addCart')) {
        alert(1)
    }
}  )

// let mapDriver = () => {
//     userHTML.innerHTML = '';
//     if (listProducts.length > 0) {
//         listProducts.forEach(product => {
//             let newProduct = document.createElement('div')
//             newProduct.classList.add('item'),
//             newProduct.innerHTML = `
//             <div class="friend-drawer friend-drawer--onhover">
//             <img class="profile-image" src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg"
//               alt="">
//             <div class="text">
//               <h6>Robo Cop</h6>
//               <p class="text-muted">Hey, you're arrested!</p>
//             </div>
//             <span class="time text-muted small">13:21</span>
//           </div>
//             `
//             listProducts.appendChild(newProduct)
//         })
//     }
// }
// mapDriver()


