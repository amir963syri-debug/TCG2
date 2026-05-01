let notifications = [
    {
        title: "تحديث جديد",
        text: "",
        time:"اطّلع على التغييرات في  قسم الأخبار",
        isNew: true
    },

];

// تحميل
function loadNotifications() {
    const list = document.getElementById("notif-list");
    const empty = document.getElementById("empty");

    list.innerHTML = "";

    if (notifications.length === 0) {
        empty.style.display = "block";
        return;
    }

    notifications.forEach(n => {
        list.innerHTML += `
            <div class="notif-card ${n.isNew ? 'new' : ''}">
                <h3>${n.title}</h3>
                <p>${n.text}</p>
                <span>${n.time}</span>
            </div>
        `;
    });
}

// تحديد الكل كمقروء
function markAllRead() {
    notifications.forEach(n => n.isNew = false);

    localStorage.setItem("notifCount", 0);

    loadNotifications();
}


// أول تحميل
loadNotifications();