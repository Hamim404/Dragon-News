import swimmingImg from "/src/assets/swimming.png" 
import classImg from "/src/assets/class.png"
import playgroundImg from "/src/assets/playground.png" 

const QZone = () => {
  return (
    <div className="bg-gray-100 p-5 rounded-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Q-Zone</h3>
      <div className="space-y-5">
          <div className="bg-white p-3 rounded-sm shadow-sm">
            <img
              src={swimmingImg}
              alt=''
              className="w-full h-40 object-cover rounded-sm"
            />
            <img
              src={classImg}
              alt=''
              className="w-full h-40 object-cover rounded-sm"
            />
            <img
              src={playgroundImg}
              alt=''
              className="w-full h-40 object-cover rounded-sm"
            />
          </div>
      </div>
    </div>
  )
}

export default QZone
