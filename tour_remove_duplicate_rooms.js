 // in this method we replace the suggested room with the room (both name and price)
 radioClickHandler(suggestedRoomData) {
  let localRooms = this.hotel.rooms;

  const intendedRoomArray = localRooms[suggestedRoomData.index]
  const intendedRoomArrayIndex = localRooms.indexOf(intendedRoomArray);
  const selectedRoomTitle = suggestedRoomData.room_title

  const filteredRooms = localRooms.map(item => {
    return item.filter(item => {
      return item.room_title !== selectedRoomTitle
    })
  })

  filteredRooms[intendedRoomArrayIndex] = intendedRoomArray;

  for (let i = 0; i < filteredRooms.length; i++) {
    for (let j = i + 1; j < filteredRooms.length; j++) {
      if (filteredRooms[i][0].room_id === filteredRooms[j][0].room_id) {
        filteredRooms[j].shift();
      }
    }
  }

  // const relatedRooms = localRooms[suggestedRoomData.index]
  // .map(item => ({...item, isSelected: false}))
  // const selectedRoom = relatedRooms.find(item => item.uniqueId === suggestedRoomData.uniqueId)
  // const selectedRoomTitle = selectedRoom.room_title;


 
  // console.log(selectedRoomTitle, intendedRoomArray, intendedRoomArrayIndex)
  // const otherRooms = localRooms.filter((_, index) => index !== suggestedRoomData.index)
  // const filteredRooms = otherRooms.map(item => item.filter(item => item.room_title !== selectedRoomTitle))
  // console.log(selectedRoom)
  
  // selectedRoom.isSelected = true;
  // localRooms[suggestedRoomData.index] = relatedRooms;


  // this.$store.state.fetchedHotel.rooms = localRooms
  // this.hotel.rooms = localRooms;

  const foundRoom = filteredRooms[suggestedRoomData.index].find(
    (item) => item.room_id === suggestedRoomData.roomContainerId
  );

  foundRoom.room_title = suggestedRoomData.room_title;
  foundRoom.price = suggestedRoomData.price;

  const firstElementOfRooms = filteredRooms.map((item) => item[0]);
  const totalPrice = firstElementOfRooms.reduce(
    (acc, value) => parseInt(value.price) + parseInt(acc),
    0
  );

  this.hotel = { ...this.hotel, rooms: filteredRooms };

  // localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  jsonStringifier("totalPrice", totalPrice);

  // this.$store.dispatch("replaceSuggestedRoomAction",
  //   suggestedRoomData,
  //   // hotelId: this.hotel.hotel.Id,
  // );
},