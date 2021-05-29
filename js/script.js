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
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

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

      /* [DONE]  find article title and save its content as const */
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
  
  function generateTags(){
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    console.log('articles ', articles);

    /* START LOOP: for every article: */
    for(let article of articles) {
      /* find tags wrapper */
      const tagsList = article.querySelector(optArticleTagsSelector);
      console.log('tagsList: ', tagsList);

      /* make html variable with empty string */
      let html = '';
      console.log('stworzono zmienną html');

      /* get tags from data-tags attribute */
      const tags = article.getAttribute('data-tags');
      console.log('wyświetlono tags: ', tags);

      /* split tags into array */
       const tagsArray = tags.split(' ');
       console.log('tagsArray: ', tagsArray);

      /* START LOOP: for each tag */
      for(let tag of tagsArray) {
        console.log('tag: ', tag);
        /* generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>' + '       ';
        console.log('linkHTML: ', linkHTML);

        /* add generated code to html variable */
        html = html + linkHTML;
        console.log('html: ', html);

      /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      tagsList.insertAdjacentHTML('afterbegin', html);
      
    /* END LOOP: for every article: */
    }
  }
  
  generateTags();

  function tagClickHandler(event) {
    console.log('wywołano funkcję tagClickHandler');
    
    /* prevent default action for this event */
    event.preventDefault();
    console.log('event: ', event);

    /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    console.log('Tag was clicked!');

    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log('href: ', href);

    /* [DONE] make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    console.log('tag: ', tag);

    /* [in progress] find all tag links with class active */
    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log('activeTagLinks: ', activeTagLinks);

    /* [DONE] START LOOP: for each active tag link */
    for(let activeTagLink of activeTagLinks) {

      /* [DONE] remove class active */
      activeTagLink.classList.remove('active');
      console.log('dodano klasę active do activeTagLink');

    /* [DONE] END LOOP: for each active tag link */
    }

    /* [DONE] find all tag links with "href" attribute equal to the "href" constant */
    const tagLinks = document.querySelectorAll('a[href"' + href + '"]');

    /* START LOOP: for each found tag link */
    for(let tagLink of tagLinks) {
      /* add class active */
      tagLink.classList.add('active');

    /* END LOOP: for each found tag link */
    }
    
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks(optArticleSelector);
  }
  
  tagClickHandler();

  function addClickListenersToTags() {
    /* find all links to tags */
    const tagLinks = document.querySelectorAll('.post-tags a');

    /* START LOOP: for each link */
    for(let tagLink of tagLinks) {
      /* add tagClickHandler as event listener for that link */
      tagLink.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
    }
  }
  
  addClickListenersToTags();
}