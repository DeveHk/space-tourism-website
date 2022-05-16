#include <iostream>
using namespace std;
int main()
{
    /*int a, b, c;
    cout << "value of a is:" << endl;
    cin >> a;

    cout << "value of b is" << endl;
    cin >> b;

    cout << "the sum is:" << a + b << endl;*/

    // // char c;

    // // cout << "the value of c is" << endl;
    // // cin >> c;

    // // cout << "the value of c in integer is  " << int(c) << endl;

    /*char arr[5];
    cout << "put the input for array" << endl;
    for (int i = 0; i < 5; i++)
    {
        cin >> arr[i];
    }
    for (int j = 0; j < 5; j++)
    {
        cout << arr[j];
}*/
    int arr[2][4];
    cout << "input fo array is" << endl;

    for (int i = 0; i < 2; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            cin >> arr[i][j];
        }
    }
    for (int k = 0; k < 2; k++)
    {
        for (int a = 0; a < 4; a++)
        {
            cout << arr[k][a] << "  ";
        }
        cout << endl;
    }
    int sum = 0;
    for (int b = 0; b < 2; b++)
    {
        for (int c = 0; c < 4; c++)
        {
            sum += arr[b][c];
        }
    }
    cout << "sum of array is   " << sum << endl;
}