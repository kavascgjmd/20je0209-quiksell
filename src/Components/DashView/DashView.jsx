// DashView.jsx
import React from "react";
import { useRecoilValue } from "recoil";
import "./DashView.css";
import Cards from "../Cards/Cards";
import { groupState, selectedDataSelector } from "../../Atom";
import { imagePaths } from "../../assets/image";
import add from '../../assets/add.svg'
import menu from '../../assets/3dotmenu.svg'
const DashView = () => {
  const { selectedData, user } = useRecoilValue(selectedDataSelector);
  const group = useRecoilValue(groupState);
  
  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          return (
            <div key={index} className="dashCardContainer">
              <div className="dashCardHeading flex-sb">
                <div className="leftView" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <div
                    className="imageContainer relative"
                    style={{ width: "15px", height: "15px", display: 'inline-block' }}
                  >
                    {group === 'priority' && (
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                        }}
                        src={imagePaths.priority[index]}
                        alt={index}
                      />
                    )}

                    {group === 'status' && (
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                        }}
                        src={imagePaths.status[elem[index]?.title]}
                        alt=""
                      />
                    )}

                    {group === 'user' && (
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                        }}
                        src={imagePaths.userimage[elem[index]?.userid]}
                        alt=""
                      />
                    )}
                  </div>
                  <div style={{ flexGrow: 1, paddingLeft: '10px' }}>
                    {elem[index]?.title} {elem[index]?.value?.length}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={add} alt="Add Icon" style={{ marginRight: '8px' }} />
                    <img src={menu} alt="Menu Icon" />
                  </div>
                </div>
              </div>
              <div className="dashList flex-gap-10">
                {elem[index]?.value?.map((ticket, ind) => {
                  return (
                    <Cards
                      key={ticket.id}
                      id={ticket.id}
                      title={ticket.title}
                      tag={ticket.tag}
                      priority={ticket.priority}
                      status={ticket.status}
                      userAvailable={ticket.userAvailable}
                      userId={ticket.userId}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};


export default DashView;
