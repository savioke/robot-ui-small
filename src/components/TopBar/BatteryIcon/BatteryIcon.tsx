import React from 'react';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import { useSelector } from 'typeDux';

/** Mui Components */

/** Components */

/** styles */

/** redux */
import { getBatteryState } from 'state/r2c2/r2c2.selectors';

/** helpers */

export default function BatteryIcon() {
  const intl = useIntl();
  const battery = useSelector(getBatteryState);

  if (battery && !Object.keys(battery).length) {
    return null;
  }

  if (battery?.chargingDock && battery?.percent <= 25) {
    return (
      <Image
        priority
        src='images/battery_charge_1_v2.svg'
        height={48}
        width={48}
        alt={intl.formatMessage({ id: 'battery' })}
      />
    );
  } else if (battery?.chargingDock && battery?.percent <= 50) {
    return (
      <Image
        priority
        src='images/battery_charge_2_v2.svg'
        height={48}
        width={48}
        alt={intl.formatMessage({ id: 'battery' })}
      />
    );
  } else if (battery?.chargingDock && battery?.percent <= 75) {
    return (
      <Image
        priority
        src='images/battery_charge_3_v2.svg'
        height={48}
        width={48}
        alt={intl.formatMessage({ id: 'battery' })}
      />
    );
  } else if (battery?.chargingDock && battery?.percent <= 100) {
    return (
      <Image
        priority
        src='images/battery_charge_4_v2.svg'
        height={48}
        width={48}
        alt={intl.formatMessage({ id: 'battery' })}
      />
    );
  } else if (battery?.percent <= 25) {
    return (
      <Image
        priority
        src='images/battery_1_of_4.svg'
        height={48}
        width={48}
        alt={intl.formatMessage({ id: 'battery' })}
      />
    );
  } else if (battery?.percent <= 50) {
    return (
      <Image
        priority
        src='images/battery_2_of_4.svg'
        height={48}
        width={48}
        alt={intl.formatMessage({ id: 'battery' })}
      />
    );
  } else if (battery?.percent <= 75) {
    return (
      <Image
        priority
        src='images/battery_3_of_4.svg'
        height={48}
        width={48}
        alt={intl.formatMessage({ id: 'battery' })}
      />
    );
  }

  return (
    <Image
      priority
      src='images/battery_4_of_4.svg'
      height={48}
      width={48}
      alt={intl.formatMessage({ id: 'battery' })}
    />
  );
}
