
import { StyleSheet, View, Text, FlatList } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';


function ExpensesOutput ({expenses, expensesPeriod}){
    return (
      <View>
        <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
        <ExpensesList />
      </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({

});