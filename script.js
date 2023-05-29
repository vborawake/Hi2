
const tabs = document.querySelectorAll('[data-tab-value]')
const tabInfos = document.querySelectorAll('[data-tab-info]')
// const tab1 = document.getElementById('#tab1')


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabValue);

        tabInfos.forEach(tabInfo => {
            tabInfo.classList.remove('active')
            // tab1.style.backgroundColor = '#e67e22';
        })
        target.classList.add('active');
        // tab1.style.backgroundColor = '#e67e22';/


    })

})

function togglediv(id) {
    var div = document.getElementById(id);
    div.style.display = div.style.display == "block" ? "none" : "block";
}