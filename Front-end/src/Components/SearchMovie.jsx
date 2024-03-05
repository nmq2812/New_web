// import { useState } from 'react';
// import data from './movie';

// function YourComponent() {
//   // Sử dụng useState để lưu trữ giá trị của input
//   const [filter, setFilter] = useState('');

//   // Hàm xử lý sự kiện khi người dùng nhập vào input
//   const handleInputChange = (event) => {
//     // Cập nhật giá trị filter khi người dùng thay đổi input
//     setFilter(event.target.value.toUpperCase());
//   };

//   return (
//     <div>
//       {/* Input search */}
//       <input
//         type="text"
//         value={filter}
//         onChange={handleInputChange}
//         placeholder="Search..."
//       />
      
//       {/* Danh sách các mục cần lọc */}
//       <div className="search">
//         {data.map((ele, i) => (
//           <a
//             key={i}
//             href={ele.url}
//             className="search_user_search_card"
//             style={{ display: ele.name.toUpperCase().includes(filter) ? 'flex' : 'none' }}
//           >
//             <img src={ele.sposter} alt={ele.name} className="search_user_search_card_img" />
//             <div className="search_user_search_card_cont">
//               <h3 className="search_user_search_card_cont_h3">{ele.name}</h3>
//               <p className="search_user_search_card_cont_p">{ele.genre}, {ele.date}, <span className="search_user_search_card_cont_span">IMDB</span><i className="bi bi-star-fill" style={{ marginRight: '5px' }}></i> {ele.imdb}</p>
//             </div>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default YourComponent;

// import { useState } from 'react';
// import SearchCard from './search'; // Đảm bảo import component SearchCard từ đúng đường dẫn

// function YourComponent() {
//   const [filter, setFilter] = useState('');

//   const handleInputChange = (event) => {
//     setFilter(event.target.value.toUpperCase());
//   };

//   return (
//     <div className='search_user'>
//       <input
//         type='text'
//         placeholder='Search...'
//         id='search_input'
//         className='search_user_input'
//         onChange={handleInputChange} // Gọi hàm xử lý sự kiện khi input thay đổi
//       />
//       <img src='src/img/user.jpg' alt='' className='search_user_img' />
//       <div className='search'>
//         {/* Truyền giá trị filter vào component SearchCard */}
//         <SearchCard filter={filter} />
//       </div>
//     </div>
//   );
// }

// export default YourComponent;

import { useState } from 'react';
import SearchCard from './SearchCard';

function SearchMovie() {
  const [filter, setFilter] = useState('');

  const handleInputChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className='search_user'>
      <input
        type='text'
        placeholder='Search...'
        id='search_input'
        className='search_user_input'
        value={filter}
        onChange={handleInputChange}
      />
      <img src='src/img/user.jpg' alt='' className='search_user_img' />
      {filter && <SearchCard filter={filter} />}
    </div>
  );
}

export default SearchMovie;

