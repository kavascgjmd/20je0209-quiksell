import { atom, selector, selectorFamily } from 'recoil';
import axios from 'axios';

export const fetchDataQuery = selectorFamily({
  key: 'fetchDataQuery',
  get: () => async () => {
    try {
      const { data } = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment/");
      return data;
    } catch (error) {
      console.error('Failed to fetch data:', error);
      throw error;
    }
  },
});

export const dataState = atom({
  key: 'dataState',
  default: selector({
    key: 'dataStateDefault',
    get: ({ get }) => get(fetchDataQuery()),
  }),
});

export const groupState = atom({
  key: 'groupState',
  default: 'priority',
});

export const orderValueState = atom({
  key: 'orderValueState',
  default: 'title',
});

export const selectedDataSelector = selector({
  key: 'selectedDataSelector',
  get: ({ get }) => {
    const group = get(groupState);
    const orderValue = get(orderValueState);
    const { tickets: allTickets, users: allUsers } = get(dataState);

    // Join tickets with users
    const ticketsWithUsers = allTickets.map(ticket => {
      const user = allUsers.find(user => user.id === ticket.userId) || {};
      return {
        ...ticket,
        userName: user.name || 'Unknown',
        userAvailable: user.available || false,
       
      };
    });

    let selectedData = [];
    let user = false;

    if (group === 'status') {
      const uniqueStatuses = [...new Set(ticketsWithUsers.map(ticket => ticket.status))];
      selectedData = uniqueStatuses.map((status, index) => ({
        [index]: {
          title: status,
          value: ticketsWithUsers.filter(ticket => ticket.status === status),
        },
      }));
    } else if (group === 'user') {
      user = true;
      selectedData = allUsers.map((user, index) => ({
        [index]: {
          title: user.name,
          userid : user.id,
          value: ticketsWithUsers.filter(ticket => user.id === ticket.userId),
        },
      }));
    } else {
      const priorityList = ["No priority", "Low", "Medium", "High", "Urgent"];
      selectedData = priorityList.map((priority, index) => ({
        [index]: {
          title: priority,
          value: ticketsWithUsers.filter(ticket => index === ticket.priority),
        },
      }));
    }

    if (orderValue === "title") {
      selectedData.forEach(item => {
        item[Object.keys(item)[0]].value.sort((a, b) => a.title.localeCompare(b.title));
      });
    }

    if (orderValue === "priority") {
      selectedData.forEach(item => {
        item[Object.keys(item)[0]].value.sort((a, b) => b.priority - a.priority);
      });
    }

    return { selectedData, user };
  },
});


