import styles from './AddressPhase.module.scss'
import InputGroup from './InputGroup'
const citySelection = [
  { id: 'KLU', city: '基隆市' },
  { id: 'TPH', city: '新北市' },
  { id: 'TPE', city: '臺北市' },
  { id: 'TYC', city: '桃園市' },
  { id: 'HSH', city: '新竹縣' },
  { id: 'HSC', city: '新竹市' },
  { id: 'MAC', city: '苗栗市' },
  { id: 'MAL', city: '苗栗縣' },
  { id: 'TXG', city: '臺中市' },
  { id: 'CWH', city: '彰化縣' },
  { id: 'CWS', city: '彰化市' },
  { id: 'NTC', city: '南投市' },
  { id: 'NTO', city: '南投縣' },
  { id: 'YLH', city: '雲林縣' },
  { id: 'CHY', city: '嘉義縣' },
  { id: 'CYI', city: '嘉義市' },
  { id: 'TNN', city: '臺南市' },
  { id: 'KHH', city: '高雄市' },
  { id: 'IUH', city: '屏東縣' },
  { id: 'PTS', city: '屏東市' },
  { id: 'ILN', city: '宜蘭縣' },
  { id: 'ILC', city: '宜蘭市' },
  { id: 'HWA', city: '花蓮縣' },
  { id: 'HWC', city: '花蓮市' },
  { id: 'TTC', city: '臺東市' },
  { id: 'TTT', city: '臺東縣' },
  { id: 'PEH', city: '澎湖縣' },
  { id: 'KMN', city: '金門縣' },
  { id: 'LNN', city: '連江縣' }
]
const AddressPhase = () => {
  return (
    <>
      <form className='col col-12' dataphase='address'>
        <h3 className={styles.formTitle}>寄送地址</h3>
        <section className='formBody col col-12'>
          {/* ------------------- row ----------------------- */}
          <div className={`${styles.row} col col-12`}>
            <div className={`${styles.selectGroup} input-w-lg-2 input-w-sm-s1`}>
              <div className={styles.selectLabel}>稱謂</div>
              <div className={styles.selectContainer}>
                <select>
                  <option value='mr'>先生</option>
                  <option value='ms'>女士</option>
                  <option value='mx'>不明</option>
                </select>
              </div>
            </div>
            <InputGroup
              inputLabel='姓名'
              placeholder='請輸入姓名'
              layoutLg='input-w-lg-4'
              layoutSm='input-w-sm-s2'
            />
          </div>
          {/* ------------------- row ----------------------- */}
          <div className={`${styles.row} col col-12`}>
            <InputGroup
              inputLabel='電話'
              placeholder='請輸入行動電話'
              layoutLg='input-w-lg-3'
              layoutSm='input-w-sm-full'
            />
            <InputGroup
              inputLabel='Email'
              placeholder='請輸入電子郵件'
              layoutLg='input-w-lg-3'
              layoutSm='input-w-sm-full'
            />
          </div>
          {/* ------------------- row ----------------------- */}
          <div className={`${styles.row} col col-12`}>
            <div className={`${styles.selectGroup} input-w-lg-2 input-w-sm-full`}>
              <div className={styles.selectLabel}>縣市</div>
              <div className={styles.selectContainer}>
                <select required>
                  <option value=''>請選擇縣市</option>
                  {citySelection.map(city =>
                    <option key={city.id} value={city.id}>{city.city}</option>
                  )}
                </select>
              </div>
            </div>
            <InputGroup
              inputLabel='地址'
              placeholder='請輸入地址'
              layoutLg='input-w-lg-4'
              layoutSm='input-w-sm-full'
            />
          </div>
        </section>
      </form>
    </>
  )
}

export default AddressPhase
