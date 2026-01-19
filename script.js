```javascript
// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. 欢迎按钮点击事件
    const welcomeBtn = document.getElementById('welcomeBtn');
    welcomeBtn.addEventListener('click', function() {
        alert('你好！欢迎来到我的第一个网站！🎉');
        
        // 改变按钮文字
        welcomeBtn.textContent = '已点击！';
        welcomeBtn.style.backgroundColor = '#4CAF50';
        welcomeBtn.style.color = 'white';
    });
    
    // 2. 表单提交处理
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止表单默认提交
        
        // 获取表单数据
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // 简单验证
        if (name && email && message) {
            alert(`感谢 ${name} 的留言！我们会尽快通过 ${email} 联系你。`);
            contactForm.reset(); // 清空表单
        } else {
            alert('请填写所有字段！');
        }
    });
    
    // 3. 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 4. 卡片点击效果
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
            
            // 2秒后恢复原样
            setTimeout(() => {
                this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }, 2000);
        });
    });
    
    // 5. 控制台欢迎信息
    console.log('🎨 网站加载完成！');
    console.log('💡 提示：试试点击欢迎按钮和卡片！');
});
```