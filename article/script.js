// 模拟管理员登录
document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 简单验证
    if (username === 'admin' && password === '123456') {
        window.location.href = 'post.html';
    } else {
        alert('用户名或密码错误！');
    }
});

// 发布文章
document.getElementById('post-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // 保存文章到 localStorage
    const post = { title, content };
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
        posts.forEach(post => {
            const article = document.createElement('article');
            article.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
            postList.appendChild(article);
        });
    }
});
