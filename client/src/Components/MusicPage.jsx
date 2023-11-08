// import { React, useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Container,
//   InputGroup,
//   FormControl,
//   Button,
//   Row,
//   Card,
// } from "react-bootstrap";

// const CLIENT_ID = "";
// const CLIENT_SECRET = "";

// export default function MusicPage() {
//   const [searchInput, SetSearchInput] = useState("");

//   return (
//     <div className="h-screen text-white">
//       <Container>
//         <InputGroup className="mb-3" size="lg">
//           <FormControl
//             placeholder="Search"
//             type="input"
//             onKeyPress={(event) => {
//               if (event.key == "Enter") {
//                 console.log("pressed enter");
//               }
//             }}
//             onChange={(event) => SetSearchInput(event.target.value)}
//           />
//           <Button onClick={() => console.log("Clicked Button")}>Search</Button>
//         </InputGroup>
//       </Container>
//       <Container>
//         <Row className="mx-2 row row-cols-4">
//           <Card>
//             <Card.Img src="#" />
//             <Card.Body>
//               <Card.Title>Album Name</Card.Title>
//             </Card.Body>
//           </Card>
//         </Row>
//       </Container>
//     </div>
//   );
// }
