export function members_as_html(members: object, requester_id: string, currentUserFireBaseUID: string): string {
    if (!members) {
        return ''
    }
    let members_as_string = '';
    Object.keys(members).forEach(m => {
        if ((m !== 'system') && (m !== requester_id)) {
            // console.log('UTILS - MEMBER ', m)

            // NEW: GET THE USER NAME (FROM LOCAL STORAGE) USING THE MEMBER ID
            const user = JSON.parse((localStorage.getItem(m)));
            // console.log('UTILS - USER GET FROM STORAGE BY MEMBER ID ', user);

            // console.log('UTILS - CURRENT USER UID ', currentUserFireBaseUID);
            if (user) {
                const user_firstname = user['firstname']
                // console.log('UTILS - USER NAME - GET FROM STORAGE BY MEMBER ID ', user_firstname);
                members_as_string += '- ' + user_firstname + ' <br>';
                if (currentUserFireBaseUID === m) {
                    members_as_string = members_as_string.replace(user['firstname'], '<strong>ME</strong>');
                }
            } else {

                members_as_string += '- ' + m + ' <br>';
                members_as_string = members_as_string.replace(currentUserFireBaseUID, '<strong>ME</strong>');
            }

        }

    });
    return members_as_string
}


export function currentUserUidIsInMembers(members: object, currentUserFireBaseUID: string, request_id: string): boolean {
    // console.log('- MEMBERS ', members)
    // console.log('- CURRENT_USER_JOINED ', currentUserFireBaseUID)

    // if (!members) {
    //     return ''
    // }
    let currentUserIsJoined = false
    Object.keys(members).forEach(m => {

        if (m === currentUserFireBaseUID) {
            // console.log('»»»»»»» UTILS MEMBERS ', members)
            // console.log('»»»»»»» CURRENT_USER_JOINED ', currentUserFireBaseUID);
            currentUserIsJoined = true;
         // console.log('»»»»»»» CURRENT USER ', currentUserFireBaseUID, 'is JOINED ?', currentUserIsJoined, 'to the request ', request_id);
            return
        }
    });
    // console.log('»»»»»»» CURRENT USER ', currentUserFireBaseUID, ' is JOINED ?', currentUserIsJoined, 'to the request ', request_id);
    return currentUserIsJoined;
}

export function avatarPlaceholder(requester_fullname) {
    let initials = '';
    if (requester_fullname) {
        const arrayName = requester_fullname.split(' ');
        arrayName.forEach(member => {
            if (member.trim().length > 1 && initials.length < 3) {
                initials += member.substring(0, 1).toUpperCase();
            }
        });
    }
    // console.log('»»»»»»» UTILS avatarPlaceholder------------->', requester_fullname, initials);
    return initials;
}

export function getColorBck(requester_fullname) {
    const arrayBckColor = ['#fba76f', '#80d066', '#73cdd0', '#ecd074', '#6fb1e4', '#f98bae'];
    let num = 0;
    if (requester_fullname) {
        const code = requester_fullname.charCodeAt(0);
        num = Math.round(code % arrayBckColor.length);
        // console.log('************** code', requester_fullname.length, code, arrayBckColor.length, num);
    }
    // console.log('»»»»»»» UTILS getColorBck ------------->', requester_fullname, arrayBckColor[num]);
    return arrayBckColor[num];
}

export const publicKey = ''

