// 模拟管理员登录
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 简单验证
    if (username === 'banming' && password === 'bsd127611519') {
        window.location.href = 'post.html';
    } else {
        alert('用户名或密码错误！');
    }
});

// 发布文章
document.getElementById('post-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const image = document.getElementById('image').value;
    const description = document.getElementById('description').value;
    const content = document.getElementById('content').value;
    const date = new Date().toLocaleDateString();

    // 保存文章到 localStorage
    const post = { title, image, description, content, date };
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    alert('文章发布成功！');
    window.location.href = 'index.html';
});

// 加载文章列表
document.addEventListener('DOMContentLoaded', function () {
    const postList = document.getElementById('post-list');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    if (postList) {
        posts.forEach((post, index) => {
            const card = document.createElement('div');
            card.className = 'post-card';
            card.innerHTML = `
                <img src="${post.image}" alt="${post.title}">
                <h3>${post.title}</h3>
                <p>${post.description}</p>
                <p class="date">${post.date}</p>
                <a href="detail.html?id=${index}">阅读更多</a>
            `;
            postList.appendChild(card);
        });
    }
});

// 加载文章详情
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const post = posts[postId];

    if (post) {
        document.getElementById('detail-title').textContent = post.title;
        document.getElementById('detail-image').src = post.image;
        document.getElementById('detail-description').textContent = post.description;
        document.getElementById('detail-content').textContent = post.content;
        document.getElementById('detail-date').textContent = `发布日期: ${post.date}`;

        // 删除文章
        document.getElementById('delete-btn').addEventListener('click', function () {
            posts.splice(postId, 1);
            localStorage.setItem('posts', JSON.stringify(posts));
            alert('文章已删除！');
            window.location.href = 'index.html';
        });
    }
});
