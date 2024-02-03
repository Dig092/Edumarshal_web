import React from "react";
import SwitchSelector from "react-switch-selector";

function SwitchProfile({ onSwitchChange }) {
    return (
        <div
            style={{
                borderRadius:20,
                height: 45,
                width: 500,
            }}
        >
            <SwitchSelector
                initialSelectedIndex={1}
                onChange={onSwitchChange}
                backgroundColor="#F2F6FF"
                selectedBackgroundColor="#004BB8"
                optionBorderRadius={12}
                wrapperBorderRadius={12}
                border={0}
                fontSize={16}
                options={[
                    {
                        label: "My profile",
                        value: 0,
                    },
                    {
                        label: "My document",
                        value: 1,
                    },
                    {
                        label: "Registration Form",
                        value: 2,
                    },
                ]}
            />
        </div>
    );
}

export default SwitchProfile;
