// public/site-helper.js

(function() {
  'use strict';

  // 配置数据
  const CONFIG = {
    siteUrl: 'https://homeindex-hth.com.cn',
    keywords: ['华体会', '首页', '导航', '指南'],
    version: '1.0.0'
  };

  // 生成提示卡片
  function createTipCard(title, message) {
    const card = document.createElement('div');
    card.className = 'site-tip-card';
    card.style.cssText = 'background:#f0f4ff;border:1px solid #b3d4fc;border-radius:8px;padding:16px;margin:12px 0;font-family:sans-serif;';

    const titleEl = document.createElement('h4');
    titleEl.textContent = title;
    titleEl.style.cssText = 'margin:0 0 8px;color:#1a73e8;font-size:16px;';

    const msgEl = document.createElement('p');
    msgEl.textContent = message;
    msgEl.style.cssText = 'margin:0;color:#333;font-size:14px;line-height:1.5;';

    card.appendChild(titleEl);
    card.appendChild(msgEl);
    return card;
  }

  // 生成关键词徽章
  function createBadge(text) {
    const badge = document.createElement('span');
    badge.className = 'keyword-badge';
    badge.textContent = text;
    badge.style.cssText = 'display:inline-block;background:#e8f0fe;color:#1a73e8;border-radius:12px;padding:4px 12px;margin:4px;font-size:13px;font-weight:500;border:1px solid #c5d9fc;';
    return badge;
  }

  // 渲染关键词徽章组
  function renderBadges(containerId, keywords) {
    const container = document.getElementById(containerId);
    if (!container) return;

    keywords.forEach(function(kw) {
      const badge = createBadge(kw);
      container.appendChild(badge);
    });
  }

  // 渲染访问说明卡片
  function renderAccessNotice(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const card = createTipCard(
      '访问说明',
      '本站点 ' + CONFIG.siteUrl + ' 提供首页导航与华体会相关资源。请使用现代浏览器访问以获得最佳体验。'
    );
    container.appendChild(card);
  }

  // 初始化：如果页面存在对应容器则自动渲染
  function init() {
    const tipContainer = document.getElementById('site-tip-container');
    if (tipContainer) {
      renderAccessNotice('site-tip-container');
    }

    const badgeContainer = document.getElementById('keyword-badge-container');
    if (badgeContainer) {
      renderBadges('keyword-badge-container', CONFIG.keywords);
    }

    // 额外展示示例数据（可选）
    console.log('[site-helper] 已加载，版本:', CONFIG.version);
    console.log('[site-helper] 关联URL:', CONFIG.siteUrl);
    console.log('[site-helper] 核心关键词:', CONFIG.keywords.join(', '));
  }

  // 确保 DOM 加载后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();