import { useEffect, useState } from "react";
import { fetchUsers } from "./fetchUsers";
import { List, Item, TopBgImg, Rectangle, Ellipse, Img, TweetsQuantity, FolowersQuantity, Btn, BtnLoadMore, Dropdown, StyledSelect, StyledOption } from "./Users.styled";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState(3);
  const [followedUsers, setFollowedUsers] = useState(JSON.parse(window.localStorage.getItem('followedUsers')) || {});
  const [filter, setFilter] = useState("show all");

  useEffect(() => {
    fetchUsers()
      .then(({ data }) => setUsers(data))
      .catch(error => error);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('followedUsers', JSON.stringify(followedUsers));
  }, [followedUsers]);

  const handleLoadMore = () => {
    setVisibleUsers(prevVisibleUsers => prevVisibleUsers + 3);
  };

  const handleFollow = (userId) => {
    setFollowedUsers(prevFollowedUsers => {
      const isFollowed = prevFollowedUsers[userId];
      const updatedFollowedUsers = { ...prevFollowedUsers };
      updatedFollowedUsers[userId] = !isFollowed;
      return updatedFollowedUsers;
    });
  };

  const addComma = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const filterUsers = (users) => {
    switch (filter) {
      case "followings":
        return users.filter(({ id }) => followedUsers[id]);
      case "follow":
        return users.filter(({ id }) => !followedUsers[id]);
      default:
        return users;
    }
  };

  const filteredUsers = filterUsers(users);

  return (
    <>
      <Dropdown>
        <StyledSelect value={filter} onChange={(e) => setFilter(e.target.value)}>
          <StyledOption value="show all">Show All</StyledOption>
          <StyledOption value="follow">Follow</StyledOption>
          <StyledOption value="followings">Followings</StyledOption>
        </StyledSelect>
      </Dropdown>
      <List>
        {filteredUsers.slice(0, visibleUsers).map(({ id, avatar, followers, tweets, user }) => {
          const isFollowed = followedUsers[id] || false;
          return (
            <Item key={id}>
              <TopBgImg />
              <Rectangle />
              <Ellipse />
              <Img src={avatar} alt={user} />
              <TweetsQuantity>{tweets} TWEETS</TweetsQuantity>
              <FolowersQuantity>
                {isFollowed ? addComma(followers + 1) : addComma(followers)} FOLLOWERS
              </FolowersQuantity>
              <Btn type="button" onClick={() => handleFollow(id)} isUnfollow={isFollowed}>
                {isFollowed ? "FOLLOWING" : "FOLLOW"}
              </Btn>
            </Item>
          );
        })}
      </List>
      {visibleUsers < filteredUsers.length && (
        <BtnLoadMore onClick={handleLoadMore}>Load More</BtnLoadMore>
      )}
    </>
  );
};
