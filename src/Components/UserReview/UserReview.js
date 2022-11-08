import React from "react";

const UserReview = () => {
  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100 my-10">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Your All Time Review</h2>
        <div className="overflow-x-auto">
          <table className="w-full p-6 text-xs text-left whitespace-nowrap">
            <thead>
              <tr className="dark:bg-gray-700">
                <th className="p-3">Name</th>
               
                <th className="p-3">Email</th>
                <th className="p-3">Address</th>
                <th className="p-3">Action</th>
                <th className="p-3">Action</th>
                <th className="p-3">
               
                </th>
              </tr>
            </thead>
            <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
              <tr>
                <td className="px-3 py-2">
                  <p>Dwight Adams</p>
                </td>
                <td className="px-3 py-2">
                  <span>UI Designer</span>
                  <p className="dark:text-gray-400">Spirit Media</p>
                </td>
                <td className="px-3 py-2">
                  <p>555-873-9812</p>
                </td>
                <td className="px-3 py-2">
                  <p>dwight@adams.com</p>
                </td>
                <td className="px-3 py-2">
                  <p>71 Cherry Court, SO</p>
                  <p className="dark:text-gray-400">United Kingdom</p>
                </td>
              </tr>
              <tr>
                <td className="px-3 text-2xl font-medium dark:text-gray-400"></td>
                <td className="px-3 py-2">
                  <p>Richie Allen</p>
                </td>
                <td className="px-3 py-2">
                  <span>Geothermal Technician</span>
                  <p className="dark:text-gray-400">Icecorps</p>
                </td>
                <td className="px-3 py-2">
                  <p>555-129-0761</p>
                </td>
                <td className="px-3 py-2">
                  <p>richie@allen.com</p>
                </td>
                <td className="px-3 py-2">
                  <p>Knesebeckstrasse 32, Obersteinebach</p>
                  <p className="dark:text-gray-400">Germany</p>
                </td>
              </tr>
            </tbody>
            <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
              <tr>
                <td className="px-3 py-2">
                  <p>Alex Bridges</p>
                </td>
                <td className="px-3 py-2">
                  <span>Administrative Services Manager</span>
                  <p className="dark:text-gray-400">Smilectronics</p>
                </td>
                <td className="px-3 py-2">
                  <p>555-238-9890</p>
                </td>
                <td className="px-3 py-2">
                  <p>alex@bridges.com</p>
                </td>
                <td className="px-3 py-2">
                  <p>Hooivelden 117, Kortrijk</p>
                  <p className="dark:text-gray-400">Belgium</p>
                </td>
              </tr>
              <tr>
                <td className="px-3 text-2xl font-medium dark:text-gray-400"></td>
                <td className="px-3 py-2">
                  <p>Lynette Brown</p>
                </td>
                <td className="px-3 py-2">
                  <span>Camera Operator</span>
                  <p className="dark:text-gray-400">Surge Enterprises</p>
                </td>
                <td className="px-3 py-2">
                  <p>555-521-5712</p>
                </td>
                <td className="px-3 py-2">
                  <p>lynette@brown.com</p>
                </td>
                <td className="px-3 py-2">
                  <p>22 rue de la Boétie, Poitiers</p>
                  <p className="dark:text-gray-400">France</p>
                </td>
              </tr>
            </tbody>
            <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
              <tr>
                <td className="px-3 py-2">
                  <p>Mariah Claxton</p>
                </td>
                <td className="px-3 py-2">
                  <span>Nuclear Technician</span>
                  <p className="dark:text-gray-400">White Wolf Brews</p>
                </td>
                <td className="px-3 py-2">
                  <p>555-654-9810</p>
                </td>
                <td className="px-3 py-2">
                  <p>mariah@claxton.com</p>
                </td>
                <td className="px-3 py-2">
                  <p>R Oliveirinhas 71, Maia</p>
                  <p className="dark:text-gray-400">Portugal</p>
                </td>
              </tr>
              <tr>
                <td className="px-3 text-2xl font-medium dark:text-gray-400"></td>
                <td className="px-3 py-2">
                  <p>Hermila Craig</p>
                </td>
                <td className="px-3 py-2">
                  <span>Production Engineer</span>
                  <p className="dark:text-gray-400">Cavernetworks Co.</p>
                </td>
                <td className="px-3 py-2">
                  <p>555-091-8401</p>
                </td>
                <td className="px-3 py-2">
                  <p>hermila@craig.com</p>
                </td>
                <td className="px-3 py-2">
                  <p>Rua da Rapina 89, Espeja</p>
                  <p className="dark:text-gray-400">Spain</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
