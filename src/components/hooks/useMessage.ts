import { useToast } from '@chakra-ui/react';
import { useCallback } from 'react';

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
}

export const useMessage = () => {
  // chakraUIのトーストを用いる(useToast();)
  const toast = useToast();

  const showMessage = useCallback((props: Props) => {
    const {title, status} = props;
    
    // インスタンス化したToastに各プロパティを渡す
    toast({
      title,
      status,
      position: "top",
      duration: 2000,
      isClosable: true,
    });
  },[toast]);

  return { showMessage }
}