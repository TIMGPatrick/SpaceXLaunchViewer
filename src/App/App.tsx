import React from 'react';
import VehicleList from "../components/ShipList/VehicleList";

export default function App() {
  return (
      <>
        <div className="max-h-full">
          <header className="bg-white shadow">
            <div className="mx-auto flex-col text-center max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="mx-auto text-3xl font-bold tracking-tight text-gray-900">
                Space X List Of Ships And Capsules
              </h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex">
              <div className="px-4 py-6 sm:px-0 mx-auto justify-center">
                <div className="h-96 lg:h-screen max-h-full rounded-xl border-4 border-gray-200 justify-center overflow-y-auto mx-5" >
                  <VehicleList />
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
  )
}

