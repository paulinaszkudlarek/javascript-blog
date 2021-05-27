'use strict';

{ const titleClickHandler = function(event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log('event: ', event);
     
    /* [DONE] remove class 'active' from all aritcle links */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    console.log('clickedElement: ', clickedElement);
    console.log('clickedElement (with plus): ' + clickedElement);
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active from all articles */
    const activeArticles = document.querySelectorAll('.posts article');
    for(let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }
    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log('articleSelector: ', articleSelector);

    /* [DONE] find the correct article using the selector (value of 'href' attribute */
    const targetArticle = document.querySelector(articleSelector);
    console.log('targetArticle: ', targetArticle);

    /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
  }

  const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

  function generateTitleLinks() {
    console.log('wykonano funkcję generateTitleLinks');
    /* [DONE] Remove title list from left column */
    const titleList = document.querySelector(optTitleListSelector); 
    titleList.innerHTML = '';
    console.log('titleList: usunięto listę linków');

    /* [DONE] for all of articles */
    const articles = document.querySelectorAll(optArticleSelector);

    let html = '';

    for(let article of articles) {  
 
      /* [DONE] find article 'id' and save as 'const' */
      const articleId = article.getAttribute('id');
      console.log('articleId: ', articleId);

      /* [DONE] find article title and save its content as const */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    
      /* [DONE] create html link <a> and save it as const */
      const linkHTML = '<li><a href="#' + articleId + '"><span>'+ articleTitle + '</span></a></li>';
      console.log('linkHTML: ', linkHTML);
    
      /* [DONE] insert html code to title list at left column */
      titleList.insertAdjacentHTML('afterbegin', linkHTML);
      console.log('titleList: ', titleList); 
      
      html = html + linkHTML;
      console.log('htlm: ', html);
    }

    titleList.innerHTML = html;
  
    const links = document.querySelectorAll('.titles a');
    console.log('wyświetlono links: ', links);
    
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }
  }
  
  generateTitleLinks();  
}