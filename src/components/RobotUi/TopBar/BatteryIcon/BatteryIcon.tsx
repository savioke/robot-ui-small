import React from 'react';
import Image from 'next/image';
import { useIntl } from 'react-intl';

/** Mui Components */

/** Components */

/** styles */

/** redux */

/** helpers */

export default function BatteryIcon() {
  const intl = useIntl();
  const batteryPlaceholder = 1;
  // TODO: Display battery by percentage reported

  if (batteryPlaceholder <= 0.25) {
    return (
      <Image
        priority
        src='images/battery_1_of_4.svg'
        height={48}
        width={48}
        alt={intl.formatMessage({ id: 'battery' })}
      />
    );
  } else if (batteryPlaceholder <= 0.5) {
    return (
      <Image
        priority
        src='images/battery_2_of_4.svg'
        height={48}
        width={48}
        alt={intl.formatMessage({ id: 'battery' })}
      />
    );
  } else if (batteryPlaceholder <= 0.75) {
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
