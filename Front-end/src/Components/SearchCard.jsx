// let search_input = document.getElementById('search_user_input')[0]

// search_input.addEventListener('keyup',() => {
//   let filter = search_input.value.toUpperCase();
//   let a = search.getElementByTagName('a');
//   for (let index = 0; index<a.length; index++){
//     let b = a[index].getElementByClassName('search_user_search_card_cont')
//     let TextValue = b.textContent || b.innerText;
//     if(TextValue.toUpperCase().indexOf(filter) > -1){
//       a[index].style.display = 'flex';
//       search.style.visibility = 'visible';
//       search.style.opacity = 1;
//     }else{
//       a[index].style.display='none'
//     }
//     if(search_input.value == 0){
//       search.style.visibility = 'hidden'
//       search.style.opacity = 0
//     }
//   }
// })
// đây là mã js thuần, bây giờ tôi muốn sử dụng reactjs viết thẳng vào trong file jsx thì làm thế nào 

// import React from 'react';

// function SearchCard({ data, filter }) {
//   return (
//     <div className='search'>
//       {data.map((ele, i) => {
//         const textValue = `${ele.name} ${ele.genre} ${ele.date} ${ele.imdb}`.toUpperCase();
//         if (textValue.includes(filter.toUpperCase())) {
//           return (
//             <a key={i} href={ele.url} className='search_user_search_card'>
//               <img src={ele.sposter} alt={ele.name} className='search_user_search_card_img' />
//               <div className='search_user_search_card_cont'>
//                 <h3 className='search_user_search_card_cont_h3'>{ele.name}</h3>
//                 <p className='search_user_search_card_cont_p'>{ele.genre}, {ele.date}, <span className='search_user_search_card_cont_span'>IMDB</span><i className="bi bi-star-fill" style={{ marginRight: '5px' }}></i> {ele.imdb}</p>
//               </div>
//             </a>
//           );
//         }
//         return null;
//       })}
//     </div>
//   );
// }

// export default SearchCard;

// eslint-disable-next-line no-unused-vars
import React from 'react';
//import data from './Movie';

// eslint-disable-next-line react/prop-types
function SearchCard({ filter }, data) {
  // Lọc dữ liệu dựa trên giá trị filter
  const filteredData = data.filter(item => {
    const textValue = `${item.name} ${item.genre} ${item.date} ${item.imdb}`.toUpperCase();
    // eslint-disable-next-line react/prop-types
    return textValue.includes(filter.toUpperCase());
  });

  // Render danh sách các mục tìm kiếm phù hợp
  return (
    <div className='search'>
      {filteredData.map((item, index) => (
        <a key={index} href={item.url} className='search_user_search_card'>
          <img src={item.sposter} alt={item.name} className='search_user_search_card_img' />
          <div className='search_user_search_card_cont'>
            <h3 className='search_user_search_card_cont_h3'>{item.name}</h3>
            <p className='search_user_search_card_cont_p'>{item.genre}, {item.date}, <span className='search_user_search_card_cont_span'>IMDB</span><i className="bi bi-star-fill" style={{ marginRight: '5px' }}></i> {item.imdb}</p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default SearchCard;

// let video = document.getElementsByTagName('video')[0]
// let play = document.getElementsById('play')[0]
// play.addEventListener('click', () => {
//   if(video.paused){
//     video.play();
//     play.innerHTML = `Play <i className="bi bi-pause-fill" style={{ marginRight: '5px' }}> </i>`
//   }else{
//     video.pause();
//     play.innerHTML = `Play <i className="bi bi-play-fill" style={{ marginRight: '5px' }}> </i>`
//   }
// })

// let series = document.getElementById('series')
// series.addEventListener('click', () => {
//   cards.innerHTML = '';
//   let series_array = data.filter(ele => {
//     return ele.type === 'series'
//   })

//   series_array.forEach((ele, i) => {
//     let {name, imdb, date, sposter, bposter, genre, url}
//     let card = document.createElement('a');
//     card.classList.add('card');
//     card.href = url;
//     card.innerHTML = `
//       <img src=${sposter} alt='${name}' className='poster'></img>
//       <div className='rest_card'>
//         <img src=${bposter} alt='' className='rest_card_img'></img>
//         <div className='rest_card_cont'>
//           <h4 className='rest_card_cont_h4'>${name}</h4>
//           <div className='rest_card_cont_sub'>
//             <p className='rest_card_cont_sub_p'>${genre}, ${date}</p>
//             <h3 className='rest_card_cont_sub_h3'><span className='rest_card_cont_sub_h3_span'> IMDB </span><i className="bi bi-star-fill" style={{ marginRight: '3px' }}> </i>${imdb}</h3>
//           </div>
//         </div>
//       </div>
//     `
//   })
//   cards.appendChild(card);
// })