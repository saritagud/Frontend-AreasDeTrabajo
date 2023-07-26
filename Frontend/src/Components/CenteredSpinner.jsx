import { ThreeCircles } from 'react-loader-spinner'

export default function CenteredSpinner() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <ThreeCircles
        height="150"
        width="150"
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#2A3E59"
        innerCircleColor="#A4AEBE"
        middleCircleColor="#2A3E59"
      />
    </div>
  )
}